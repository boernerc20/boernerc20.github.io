# Claude Code Configuration

This directory contains configuration files for Claude Code to provide better context and assistance when working on this portfolio website.

## Files

### `init`
Automatically loaded at the start of every Claude Code conversation. Contains:
- Project overview and technology stack
- Directory structure explanation
- Common tasks and workflows
- Git best practices
- Deployment instructions
- Troubleshooting guide

### Commands Directory

Slash commands for common website management tasks:

- `/deploy` - Commit and push changes to GitHub Pages
- `/add-project` - Add a new project to the portfolio
- `/update-experience` - Update work experience section
- `/optimize-images` - Check and optimize image sizes

## Usage

### Automatic Context Loading
When you start a new Claude Code session in this repository, the `init` file is automatically loaded, giving Claude full context about your project.

### Using Slash Commands
Type `/` in Claude Code to see available commands, or type the full command name:

```
/deploy
/add-project
/update-experience
/optimize-images
```

## Customization

Feel free to edit these files to match your workflow preferences:
- Add new slash commands by creating `.md` files in the `commands/` directory
- Update the `init` file with new sections or modified instructions
- Follow the existing format for consistency

## GitHub Workflows

The `.github/workflows/validate.yml` workflow runs on every push to:
- Validate HTML syntax
- Check for large files
- Ensure code quality before deployment

## Resources

- Claude Code Documentation: https://docs.claude.com/claude-code
- Slash Commands Guide: https://docs.claude.com/claude-code/slash-commands
- Init File Reference: https://docs.claude.com/claude-code/init-files
