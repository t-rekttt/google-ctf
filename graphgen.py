lines = open('graph.txt').readlines()

m = set()
edges = []

for line in lines:
  parts = line.strip().split(' <- ')
  
  for v in parts:
    m.add(int(v))

  for i in range(len(parts) - 1):
    edges.append([parts[i + 1], parts[i]])

s = ''

for item in m:
  s += str(item) + '\n'

for item in edges:
  s += '{} {}'.format(item[0], item[1]) + '\n'

open('graphformatted.txt', 'w').write(s)