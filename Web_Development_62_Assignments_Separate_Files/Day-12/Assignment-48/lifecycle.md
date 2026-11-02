# Load–Update–Save–Render Lifecycle
1. **Load:** Read saved data from localStorage when the app starts.
2. **Update:** Change the in-memory state after user interaction.
3. **Save:** Serialize updated state with JSON and write it to localStorage.
4. **Render:** Rebuild the visible interface from the current state.
5. Keep rendering separate from storage operations so each function has one responsibility.
