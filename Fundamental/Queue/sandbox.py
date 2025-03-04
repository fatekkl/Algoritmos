from queue import Queue


q = Queue()


q.put(1)
q.put(2)
q.put(3)

print(q.get())
print(q.get())
print(q.get())

## QUEUES FIFO
