# Implementing Merge Sort Algorithm
def merge_sort(arr):
   # Base case: if the list is empty or has one element, it's already sorted
   if len(arr) <= 1:
       return arr
   
   # Recursive case: split the list into left and right halves, and merge sort each
   mid = len(arr) // 2
   left = merge_sort(arr[:mid])
   right = merge_sort(arr[mid:])


   # Merge the sorted halves
   return merge(left, right)


def merge(left, right):
   # Merge two sorted lists into one sorted list
   sorted_arr = []
   i = j = 0
   while i < len(left) and j < len(right):
       # Strip whitespace and make comparison case-insensitive
       if left[i].strip().lower() < right[j].strip().lower():
           sorted_arr.append(left[i])
           i += 1
       else:
           sorted_arr.append(right[j])
           j += 1
   # If there are remaining elements in left or right, append them
   sorted_arr.extend(left[i:])
   sorted_arr.extend(right[j:])
   return sorted_arr


# Test block to check if the merge sort is working with a hardcoded list
if __name__ == '__main__':
   # Simple hardcoded list for testing
   test_titles = [
       " Banana Bread",
       "Apple Pie",
       " Cherry Tart",
       "Eggs Benedict",
       " Bubble & Squeak",
       "French Toast",
       "Spotted Dick",
       " Muffins",
       "Pancakes",
       "15-minute chicken & halloumi burgers"
   ]


#    # Print the original list
#    print("Original list of titles:")
#    print(test_titles)


#    # Sort the list using the merge sort algorithm
#    sorted_test_titles = merge_sort(test_titles)


#    # Print the sorted list
#    print("\nSorted list of titles:")
#    print(sorted_test_titles)