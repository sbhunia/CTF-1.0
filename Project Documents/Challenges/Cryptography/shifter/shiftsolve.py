# Given new_flag
new_flag = "re}fitS_h_urFT{UMC"  # Replace this with the actual value of new_flag

# Initialize an empty string to store the original flag
original_flag = ""

# Loop through new_flag in steps of 3
for i in range(0, len(new_flag), 3):
    # Reconstruct the original flag by reversing the interleaving
    original_flag += new_flag[i+2]
    original_flag += new_flag[i]
    original_flag += new_flag[i+1]

print(original_flag)

# Given the transformed flag
transformed_flag = original_flag

# Reverse the transformation by applying [::-1] again
original_flag = transformed_flag[::-1]

print(original_flag)

