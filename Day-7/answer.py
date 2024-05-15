def filter_records(data, criteria):
  indices = {key: {} for key in criteria.keys()}
  for record in data:
    for key, value in record.items():
      if key in criteria:
        if value not in indices[key]:
          indices[key] [value] = []
        indices[key][value].append(record)

  filtered_data = []
  for conditions in criteria.items():
    key, (operator, value) = conditions
    possible_values = indices[key]
    for val, records in possible_values.items():
      if eval(f"{val} {operator} {value}"):
        filtered_data.extend(records)

  return filtered_data