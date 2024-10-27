def load_xml(file):
    file_path = f'Examples/{file}'
    try:
        tree = ET.parse(file_path)
        xml = tree.getroot()
        return xml
    except FileNotFoundError:
        print(f'Failed to open "{file_path}"')
    except ET.ParseError:
        print(f'Failed to parse "{file_path}"')

