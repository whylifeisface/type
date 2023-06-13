interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

type InorderTraversal<T extends TreeNode | null, prev extends TreeNode | null = T> = any
    // T extends null ? [] :
    //     T extends TreeNode ? InorderTraversal<T["left"], T> :
    //         T["right"] extends null ? [] :
            // InorderTraversal<prev, T>
// TODO 我寻思着你也没有栈呀