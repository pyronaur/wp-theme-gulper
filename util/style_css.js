import fs from 'fs-extra'

const get_contents     = () => fs.readFileSync( process.cwd() + '/style.css', 'utf8' )
const replace_contents = ( content ) => fs.writeFileSync( process.cwd() + '/style.css', content, 'utf8' )
const find_version     = ( content ) => content.match( /Version:\s*(\d[\w\d.-]+)/ )[ 1 ]
const get_version      = () => find_version( get_contents() )

const validate_version = ( version ) => {
    version = version.replace( ' ', '-' ) // replace spaces with dashes
    version = version.replace( /[^\d\w-_.]/gi, '' )  // Only Valid characters: "a-z 0-9 . - _"
    return version
}

const update_version = ( from, to ) => {
    let contents = get_contents()
    to           = validate_version( to )
    contents     = contents.replace( from, to )
    replace_contents( contents )
}
export { get_version as default, update_version, get_version }