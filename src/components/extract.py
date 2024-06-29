import os
import re

# Define the paths to the CSS files
css_files = [
    '33efa40bd27ebfda.css',
    '75a6a0f1a58c91f5.css',
    '89c7d2ff12fd058e.css'
]

# Define the classes to extract
classes_to_extract = [
    '.styles_container__XX6JI',
    '.styles_contentContainer__JHEMi',
    '.styles_wave__cVHE3',
    '.styles_wave1__UFDrb',
    '.styles_wave2__5zR3H',
    '.styles_wave3__XZz_N',
    '.styles_wave4__PndZx',
    '.styles_wave5__BEerb',
    '.styles_row__2OTa0',
    '.styles_rowCenter__iMV9g',
    '.styles_col__ozxzj',
    '.styles_col12__LCMXs',
    '.styles_colSm10__OhZZ5',
    '.styles_colMd12__FGdl6',
    '.styles_title__X__sZ',
    '.styles_text__8jPQ_',
    '.styles_button__U5f5j',
    '.styles_tertiary__FRehK',
    '.styles_large__Ke9nm',
    '.styles_notResponsive__AERsQ',
    '.styles_cta__HD3jz',
    '.styles_image__ukrJ_'
]

# Define a function to extract styles
def extract_styles(css_file, classes):
    styles = {}
    with open(css_file, 'r') as file:
        content = file.read()
        for cls in classes:
            pattern = re.compile(r'(%s\s*{[^}]*})' % re.escape(cls))
            matches = pattern.findall(content)
            if matches:
                styles[cls] = matches[0]
    return styles

# Collect all the styles
all_styles = {}
for css_file in css_files:
    styles = extract_styles(css_file, classes_to_extract)
    all_styles.update(styles)

# Write the collected styles to hero.css
output_file = 'hero.css'
with open(output_file, 'w') as file:
    for cls in classes_to_extract:
        if cls in all_styles:
            file.write(all_styles[cls] + '\n\n')

print(f'Successfully extracted styles to {output_file}')
