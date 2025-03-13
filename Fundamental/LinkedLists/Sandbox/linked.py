class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_front(self, value):
        new_node = Node(value)
        new_node.next = self.head
        if self.head:
            self.head.prev = new_node
        else:
            self.tail = new_node
        self.head = new_node
        pass

    def add_to_end(self, value):
        new_node = Node(value)
        new_node.prev = self.tail
        if self.tail:
            self.tail.next = new_node
        else:
            self.head = new_node
        self.tail = new_node
        pass

    def remove_from_front(self):
        if not self.head:
            return None
        removed = self.head.value
        self.head = self.head.next
        if self.head:
            self.head.prev = None
        else:
            self.tail = None

        return removed

    def remove_from_end(self):
        if not self.tail:
            return None

        removed = self.tail.value
        self.tail = self.tail.prev

        if self.tail:
            self.tail.prev = None
        else:
            self.head = None

        return removed


def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    new_list = None

    while head:
        next_node = head.next
        head.next = new_list
        new_list = head
        head = next_node

    return new_list


def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
    ahead = head

    while ahead and ahead.next:
        ahead = ahead.next.next
        head = head.next

    return head


def hasCycle(self, head: Optional[ListNode]) -> bool:
    slow = head
    fast = head

    counter = 0

    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
        counter += 1

        if fast == slow:
            print(counter)
            return True

    print(counter)
    return False
