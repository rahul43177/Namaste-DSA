def remove_duplicates(arr):
    j = 0
    for i in range(len(arr)):
        if arr[i] > arr[j]:
            j+=1
            arr[j] = arr[i]
    return arr


arr = [0,0,1,1,1,2,2,3,3]

new_array = remove_duplicates(arr)
print(f"new array -- {new_array}")
