import util from 'gulp-util'
import defaults from 'defaults-deep'


// Read YAML Config:
const configure = ( config ) => {
    let settings = {

        // General Config
        url       : config.development_url,
        build     : './build',
        production: !!util.env.production,
        theme     : config,

        style: {
            source: './assets/style',
        },

        scripts: {
            source: './assets/scripts',
        },


        language: {
            dest  : `./assets/languages/${config.slug}.pot`,
            config: {
                domain        : config.slug,
                package       : config.name,
                bugReport     : config.email,
                lastTranslator: `${config.author} <${config.email}>`,
                team          : `${config.author} <${config.email}>`,
            }
        },

        // Theme Packaging:
        pack: {
            excludes     : config.exclude_files,
            zip_file_name: `${config.slug}.zip`,
            destination  : config.destination || '../',
        },
    }


    // Allow to override config from YAML:
    if ( config.override ) {
        settings = defaults( config.override, settings )
    }

    return settings

}

export default configure