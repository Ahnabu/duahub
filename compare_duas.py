import re
import json

with open('d:/Programming/Projects/Dua/src/data/duas_old.ts', 'r', encoding='utf-8') as f:
    old_content = f.read()

with open('d:/Programming/Projects/Dua/src/data/duas.ts', 'r', encoding='utf-8') as f:
    new_content = f.read()

old_ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", old_content)
new_ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", new_content)

print(f'duas_old.ts total IDs: {len(old_ids)}')
print(f'duas.ts total IDs: {len(new_ids)}')

missing_in_new = set(old_ids) - set(new_ids)
print(f'\nIDs in duas_old but NOT in duas.ts ({len(missing_in_new)}):')
for id_ in sorted(missing_in_new):
    print(f'  {id_}')
