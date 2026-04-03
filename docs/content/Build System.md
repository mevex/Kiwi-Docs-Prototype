---
title: Build System
alias: Build
---

The project uses a minimal build system. It avoids IDE-specific tooling so the codebase can be built from any editor independently.

To build the entire project, run `build-all.bat` from a command prompt configured for MSVC.

# Build Instructions
The following steps describe how to build the entire project after a fresh repository clone. A basic familiarity with the Windows command prompt is assumed.

## Configuring the Command Prompt
To run MSVC (`cl`) from a command prompt, several environment variables must be set. Microsoft provides batch files to simplify this for the current command prompt session.

These batch files can be located in the Visual Studio installation folder, under `VC\Auxiliary\Build` (e.g. `C:\Program Files\MicrosoftVisual Studio \20**\VC\Auxiliary\Build`). Run `vcvars64.bat` to configure the environment for building an x64 version of the project.

## Running the Build Batch
After configuring the environment, use the same command prompt to navigate to the project folder and run `build-all.bat`. This batch must be executed from the project folder to work correctly.

## Running the Demo
If the build succeeds, a `bin` folder will be created. It will contain debug files, `Engine.lib` (and `.dll`) and `Testbed.exe`. Run this executable to start the demo.

# Inside the Build System
This section is a deep dive into the build system, explaining how it works and the reasoning behind its design.

## Batch Structure
Running `build-all.bat` triggers a chain reaction that builds the entire project. It first builds `Engine.lib` (and `.dll`) first, then `Testbed.exe`, which statically links with the engine.

## Unity Build
Each binary is built using a unity build. A generated `.cpp` file in the `bin` folder includes every `.cpp` file from the `src` directory, creating a single large translation unit. This significantly reduces linking time which is the main bottleneck when building large C++ projects.

This approach keeps build times low without requiring a more sophisticated system that recompiles and links only modified translation units.

## Compiler Flags