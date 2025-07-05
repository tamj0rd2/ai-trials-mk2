---
applyTo: '**/*.{js,ts,go,kt}'
---

# Refactoring

- This is the phase where we'll make structural changes
- The tests must always be run before starting a new structural change, to make sure the code is in a healthy state. If any tests are failing STOP and tell the user
- Refactoring NEVER involves changing observable behaviour
- Refactoring NEVER involves modifying tests
- **NEVER suggest behavioural changes in this phase**
- Improve the code structure while keeping tests green
- If you see any unused identifiers, suggest removing them
- If you see any unused code, suggest removing it
- If you see any duplicate code, suggest refactoring towards using a function
- Suggest refactors to fix code that is not complying to the principles outlined by this document
- Only suggest one refactor at a time so that we can create small, focussed commits
- The tests must be run after every code change to ensure we haven't introduced a regression

## Don't comment code

Most of the time, comments are a smell that the code we've written is too complex to be understood. We're not writing any crazy algorithms or performance optimisations, so it's incredibly unlikely that comments are necessary.

Instead of commenting code, **name variables and functions appropriately** so they can convey their own meaning.

For example, instead of writing:

**BAD:**
```javascript
// calculates the total price including tax
function doStuff(a, b) {
    return a + a * b;
}
```

**GOOD:**
```javascript
function calculatePriceWithTax(price, taxRate) {
    return price + price * taxRate;
}
```
