import requests

# Function to make API requests
def make_api_request(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Fetch all (14) categories
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

# Return every recipe in each category (303 Total)
def get_all_recipes():
    all_recipes = []
    for c in get_categories():
        category_recipes = get_recipetitle_by_category(c)
        for recipe in category_recipes:
            all_recipes.append(recipe)
    return all_recipes


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

# Test to get just 3 elements inside of a category object: Title, Thumbnail, MEALID.
# value = get_recipes_by_category('beef')[0]
# for key in value:
#     print(value[key])

# print(f"The recipe is: {value['Title']}")


# Testing
# print(type((get_all_recipes())))

