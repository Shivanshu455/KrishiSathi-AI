from services.crop_loader import load_crops

crops = load_crops()

print(f"Loaded {len(crops)} crops\n")

for crop in crops:
    print(crop["name"])