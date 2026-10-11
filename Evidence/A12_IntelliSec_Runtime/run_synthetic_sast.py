"""Bounded, offline IntelliSec native SAST before/after demonstration.

Run with the sibling repository's virtualenv Python. Inputs are synthetic strings;
no source repository, network target, database, model, or UI is scanned.
"""
from __future__ import annotations

import hashlib
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = Path(os.environ.get("INTELLISEC_REPO", HERE.parents[3] / "IntelliSec")).expanduser().resolve()
sys.path.insert(0, str(REPO))

from src.agents.base import AgentAction  # noqa: E402
from src.agents.code_review_agent import CodeReviewAgent  # noqa: E402


BEFORE = """<?php
function issueToken() {
    $token = mt_rand();
    return response()->json(['token' => (string)$token]);
}
"""

AFTER = """<?php
function issueToken() {
    $token = bin2hex(random_bytes(16));
    return response()->json(['token' => $token]);
}
"""


def scan(code: str) -> dict:
    agent = CodeReviewAgent(
        use_incremental=False,
        use_cfg=False,
        use_structural=False,
        use_interprocedural=False,
        use_cross_file_taint=False,
        use_semantic=False,
    )
    action = AgentAction(
        action_type="scan_file",
        parameters={"file": {"path": "src/TokenController.php", "content": code}},
    )
    return agent._scan_file_sync(action)


def main() -> None:
    before = scan(BEFORE)
    after = scan(AFTER)
    result = {
        "timestamp_utc": datetime.now(timezone.utc).isoformat(),
        "scope": "synthetic local PHP content, direct native CodeReviewAgent._scan_file_sync, no product/database/network/model call",
        "engine_options": {"dataflow": True, "cfg": False, "structural": False, "incremental": False, "interprocedural": False, "cross_file_taint": False, "semantic": False},
        "synthetic_path": "src/TokenController.php",
        "before_source": BEFORE,
        "after_source": AFTER,
        "before_sha256": hashlib.sha256(BEFORE.encode()).hexdigest(),
        "after_sha256": hashlib.sha256(AFTER.encode()).hexdigest(),
        "before_raw": before,
        "after_raw": after,
    }
    (HERE / "raw_results.json").write_text(json.dumps(result, indent=2, default=str) + "\n")
    print(json.dumps({
        "before_findings": len(before.get("findings", [])),
        "after_findings": len(after.get("findings", [])),
        "before_types": sorted({f.get("vulnerability_type", "") for f in before.get("findings", [])}),
        "after_types": sorted({f.get("vulnerability_type", "") for f in after.get("findings", [])}),
        "raw_results": str(HERE / "raw_results.json"),
    }, indent=2))


if __name__ == "__main__":
    main()
