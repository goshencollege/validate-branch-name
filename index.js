import { getInput, setFailed } from "@actions/core";

async function run() {
  try {
    // only proceed if this action was triggered by a push event
    if (github.context.eventName !== "push") {
      throw new Error(`Invalid event: ${github.context.eventName}`);
    }

    const branchName = github.context.payload.ref.replace("refs/heads/", "");
    const pattern = getInput("pattern");

    if (!nameMatchesPattern(branchName, pattern)) {
      setFailed(
        `The branch name ${branchName} does not match the predefined regex pattern - ${pattern}`
      );
    }
  } catch (error) {
    setFailed(error.message);
  }
}

function nameMatchesPattern(name, pattern) {
  return new RegExp(pattern).test(name);
}

run();
