import os
for root, dirs, files in os.walk(os.getcwd(), topdown=False):
   for name in files:
        print(os.path.join(root, name))
        if '.pdf' in name or '.psd' in name:
            os.remove(os.path.join(root, name))
        else:
            new_name = name.lower().replace(' ', '_').replace('(', '').replace(')', '')
            os.rename(os.path.join(root, name), os.path.join(root, new_name))

   for name in dirs:
        print(os.path.join(root, name))
        if name != '.git':
            new_name = name.lower().replace(' ', '_').replace('(', '').replace(')', '')
            os.rename(os.path.join(root, name), os.path.join(root, new_name))