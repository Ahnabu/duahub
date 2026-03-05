import re

with open('src/data/duas_old.ts', 'r', encoding='utf-8') as f:
    old = f.read()
with open('src/data/duas.ts', 'r', encoding='utf-8') as f:
    new = f.read()

def extract_dua_entries(content):
    lines = content.split('\n')
    duas = []
    current = {}
    
    for line in lines:
        id_match = re.search(r"^\s+id:\s*[\"']([^\"']+)[\"']", line)
        if id_match:
            current['id'] = id_match.group(1)
        
        cat_match = re.search(r"^\s+category:\s*[\"']([^\"']+)[\"']", line)
        if cat_match:
            current['category'] = cat_match.group(1)
        
        if 'id' in current and 'category' in current:
            cat = current['category']
            id_ = current['id']
            # Only count actual dua entries (have dashes in ID like q-rep-001) 
            # Skip subcategoryMeta entries (id = repentance, family, etc.)
            if cat in ('quran', 'sunnah', 'salaf') and '-' in id_:
                entry = dict(current)
                if entry not in duas:
                    duas.append(entry)
            current = {}
    
    return duas

old_duas = extract_dua_entries(old)
new_duas = extract_dua_entries(new)

old_by_cat = {}
for d in old_duas:
    cat = d['category']
    if cat not in old_by_cat:
        old_by_cat[cat] = []
    old_by_cat[cat].append(d['id'])

new_by_cat = {}
for d in new_duas:
    cat = d['category']
    if cat not in new_by_cat:
        new_by_cat[cat] = []
    new_by_cat[cat].append(d['id'])

print('=== DUAS_OLD counts by category ===')
for cat, ids in sorted(old_by_cat.items()):
    print(f'  {cat}: {len(ids)} duas')

print()
print('=== DUAS.TS counts by category ===')
for cat, ids in sorted(new_by_cat.items()):
    print(f'  {cat}: {len(ids)} duas')

print(f'  TOTAL in duas.ts: {sum(len(v) for v in new_by_cat.values())}')

print()
print('=== MISSING from duas.ts (by category) ===')
for cat in sorted(old_by_cat.keys()):
    old_set = set(old_by_cat.get(cat, []))
    new_set = set(new_by_cat.get(cat, []))
    missing = old_set - new_set
    if missing:
        print(f'  {cat}: {len(missing)} missing - {sorted(missing)}')
    else:
        print(f'  {cat}: nothing missing')
