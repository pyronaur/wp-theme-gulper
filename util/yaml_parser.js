import YAML from 'yamljs'


// Parse & Set the configuration as a global that can be used everywhere in GULP
export default () => {
    return YAML.load( process.cwd() + '/theme.yml' )
} 