import math
from Crypto.Util.number import getPrime, bytes_to_long
from secrets import FLAG1

m = bytes_to_long(FLAG1.encode())  # Encoding FLAG1 to bytes

n = math.prod([getPrime(1024) for _ in range(2**0)])
e = 0x10001
c = pow(m, e, n)

with open('output.txt', 'w') as f:
    f.write(f'{n = }\n')
    f.write(f'{e = }\n')
    f.write(f'{c = }\n')
