<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

The project is set up for spec-driven development with detailed specification in OpenSpec document structure. The specification is detailed enough be implemented without any user input needed.

Read the OpenSpec requirement documents at openspec/changes/add-snippet-web-assembly and implement the specification. Create the required files and directories as specified in the OpenSpec document. 

After implementation, verify the new created files fulfill the requirements.