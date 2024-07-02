function findContentChildren(g, s) {
    // Sort the arrays in ascending order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    // Initialize pointers and contentChildren counter
    let i = 0;  // Pointer for greed factors array
    let j = 0;  // Pointer for cookie sizes array
    let contentChildren = 0;  // Counter for content children

    // Iterate through the arrays
    while (i < g.length && j < s.length) {
        // Check if the current cookie size can satisfy the current child's greed factor
        if (s[j] >= g[i]) {
            // If yes, increment the contentChildren counter and move to the next child
            contentChildren++;
            i++;
        }
        // Move to the next cookie, whether it satisfies the current child or not
        j++;
    }

    // Return the total number of content children
    return contentChildren;
}

// Test case
const g = [1, 2, 3];
const s = [3];
const output = findContentChildren(g, s);
console.log(output); // Output: 1