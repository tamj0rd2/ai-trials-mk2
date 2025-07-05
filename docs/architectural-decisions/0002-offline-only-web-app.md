# 2. Offline-only web app

Date: 2025-07-05

## Status
Accepted

## Context
We are implementing the steel thread for a personal task management app, scoped to a single user, with minimal features (create, view, mark complete). The user will interact with the app primarily on a mobile device. The user does not always have an internet connection, so offline-only operation is required for the initial version. In the future, we may add online sync and multi-device support.

## Decision
- The steel thread implementation will be a mobile-friendly offline-only web app.
- All data will be stored locally on the device using browser storage (e.g., localStorage or IndexedDB).
- No server, cloud, or network features will be implemented in this iteration.
- The UI will be optimized for mobile use but accessible from a laptop browser as well.

## Consequences
- The app will work without an internet connection and will be immediately usable on the user's mobile device.
- Data will not sync between devices or be backed up; clearing browser data will erase all tasks.
- The architecture is simple and fast to implement, but not suitable for multi-device or cloud use until future iterations.
- Future ADRs will be required to introduce online sync, cloud storage, or multi-user features.
