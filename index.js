const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    // only proceed if this action was triggered by a push event
    if (github.context.eventName !== "push") {
      throw new Error(`Invalid event: ${github.context.eventName}`);
    }

    const branchName = github.context.payload.ref.replace("refs/heads/", "");
    const pattern = core.getInput("pattern");

    if (!nameMatchesPattern(branchName, pattern)) {
      core.setFailed(
        `The branch name ${branchName} does not match the predefined regex pattern - ${pattern}`
      );
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

function nameMatchesPattern(name, pattern) {
  return new RegExp(pattern).test(name);
}

run();
