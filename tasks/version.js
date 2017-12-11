import gulp from 'gulp'
import replace from 'gulp-replace'
import prompt from 'gulp-prompt'
import gutil from 'gulp-util'
import { get_version, update_version } from '../util/style_css'


export default () => {

    let current_version = get_version()

    return gulp.src( 'style.css' )
               .pipe(
                   prompt.prompt( {
                       type   : 'input',
                       name   : 'version',
                       message: `Current Theme Version: ${current_version}\nEnter New Version: (enter to skip)`

                   }, ( res ) => {
                       if ( !res || !res.version ) {
                           gutil.log( `Keeping it cool at version ${gutil.colors.blue( current_version )}` )
                           return
                       }

                       update_version( current_version, res.version )

                       // Log new version
                       gutil.log( 'Updating version to ' + gutil.colors.green( res.version ) )
                   } )
               )

}