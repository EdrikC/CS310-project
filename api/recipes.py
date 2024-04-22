import requests

# Function to make API requests
def make_api_request(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Fetch categories
def get_categories():
    url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    data = make_api_request(url)
    return [category['strCategory'] for category in data['categories'] 
        if 'strCategory' in category and category['strCategory'] is not None]

# Fetch recipe titles by category
def get_recipetitle_by_category(category):
    url = f"https://www.themealdb.com/api/json/v1/1/filter.php?c={category}"
    data = make_api_request(url)
    if data is not None:
        return [meal['strMeal'] for meal in data['meals'] if 'strMeal' in meal and meal['strMeal'] is not None]
    else:
        return []



# Fetch recipes by category
def get_allrecipedata_by_category(category):
    url = f"https://www.themealdb.com/api/json/v1/1/filter.php?c={category}"
    data = make_api_request(url)
    if data is not None:
        return [{'Title': meal['strMeal'], 'Thumbnail': meal['strMealThumb'], 'Meal ID': meal['idMeal']} for meal in data['meals']]
    else:
        return []


# Fetch detailed recipe information by ID
def get_recipe_details(meal_id):
  url = f"https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}"
  data = make_api_request(url)
  meal_details = data['meals'][0] if data is not None and \
  data['meals'] is not None else None

  if meal_details:
      # Extract ingredients and measurements
      ingredients = []
      measurements = []
      for i in range(1, 21):  # Assuming there are 20 possible ingredients and measurements
          ingredient = meal_details.get(f'strIngredient{i}')
          measurement = meal_details.get(f'strMeasure{i}')
          if ingredient and ingredient.strip():  # Check if ingredient is not None and not an empty string
              ingredients.append(ingredient.strip())
          if measurement and measurement.strip():  # Check if measurement is not None and not an empty string
              measurements.append(measurement.strip())

      # Return a dictionary with the formatted data
      return {
          'Category': meal_details.get('strCategory', ''),
          'Name': meal_details.get('strMeal', ''),
          'Ingredients': ', '.join(ingredients),
          'Measurements': ', '.join(measurements),
          'Instructions': meal_details.get('strInstructions', ''),
          'Area': meal_details.get('strArea', '')
      }
  return None

# Main process to fetch all recipes
# def fetch_all_recipes():
#     categories = get_categories()
#     print(f"Fetched {len(categories)} categories.")
#     all_recipes = []
#     seen_ids = set()

#     for category in categories:
#         print(f"Processing category: {category}")
#         meal_summaries = get_recipes_by_category(category)
#         print(f"Found {len(meal_summaries)} meals in category {category}")
#         for meal in meal_summaries:
#             meal_id = meal['idMeal']
#             if meal_id not in seen_ids:
#                 print(f"Fetching details for meal ID: {meal_id}")
#                 seen_ids.add(meal_id)
#                 detailed_meal = get_recipe_details(meal_id)
#                 if detailed_meal:
#                     all_recipes.append(detailed_meal)
                  
#     df_recipes = pd.DataFrame(all_recipes)
#     return df_recipes

# Load all recipes into a DataFrame
# df_recipes = fetch_all_recipes()

print(get_categories())
for c in get_categories():
    print(get_recipetitle_by_category(c))

# Test to get just 3 elements inside of a category object: Title, Thumbnail, MEALID.
# value = get_recipes_by_category('beef')[0]
# for key in value:
#     print(value[key])

# print(f"The recipe is: {value['Title']}")


get_recipetitle_by_category('beef')

