function test(description, actual, expected) {
    if (actual === expected || JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log(`[PASS] ${description}`);
    } else {
        console.log(`[FAIL] ${description}`);
        console.log(`       Expected: ${expected}`);
        console.log(`       Received: ${actual}`);
    }
}

module.exports = { test };
