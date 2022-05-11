lines = list(map(lambda line: line.strip(), open('cpporig.c').readlines()))

lv = 0
spaces = 2

for i in range(len(lines)):
  if '#ifndef' in lines[i]:
    lines[i] = ' ' * (lv * spaces) + lines[i]
    lv += 1
  elif '#ifdef' in lines[i]:
    lines[i] = ' ' * (lv * spaces) + lines[i]
    lv += 1
  elif ('#endif' in lines[i]):
    lv -= 1
    lines[i] = ' ' * (lv * spaces) + lines[i]
  elif '#if' in lines[i]:
    lines[i] = ' ' * (lv * spaces) + lines[i]
    lv += 1
  elif '#else' in lines[i]:
    lv -= 1
    lines[i] = ' ' * (lv * spaces) + lines[i]
    lv += 1
  else:
    lines[i] = ' ' * (lv * spaces) + lines[i]

code = '\n'.join(lines)
code = code.replace('cpp.c', 'cpp1.c')

open('cpp1.c', 'w').write(code)