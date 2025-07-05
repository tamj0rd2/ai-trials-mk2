---
applyTo: '**'
---

# Research

## Context7 Usage Requirements

- Always assume Context7 is already running in the background as an MCP server through npx + vscode.
- When answering questions about frameworks, libraries, or APIs, use Context7 to retrieve current documentation rather than relying on training data.
- When determining what code to write, refer to the latest documentation of our chosen libraries using context7, and prefer to use that information over training data.
- If executing Context7 doesn't work, DO NOT PRETEND IT WORKED. Tell the user that something went wrong
- Never rely solely on training data for framework-specific implementations
- Check Context7 before writing code for any library or framework to ensure latest guidelines are followed
- Use Context7 for dependency versions to ensure current and compatible package versions
- NEVER assume package versions are unstable without explicit documentation - if Context7 shows a version exists, use it unless the documentation explicitly states it's unstable, experimental, or pre-release
- Trust Context7 version information - if a higher version number is shown in Context7 results, update to that version unless there's explicit evidence of instability
