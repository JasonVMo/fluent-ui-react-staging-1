import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M21.1 19.6l-.5-.5c-.7-.8-2-1.5-3.3-1.1l-1 .4-2.4-3.4.8-.8c.9-1 .6-2.4.1-3.4l-.3-.7c-.5-.9-1.4-.9-2.1-.9 0 0-.4 0-.5.1-.5.2-.9.7-.9 1.3-.2 2.7.6 5.3 2.1 7.6 1.6 2.2 3.8 3.8 6.4 4.6.1 0 .3.1.4.1.4 0 .8-.2 1.1-.5l.3-.8c.2-.7.4-1.4-.2-2z"
      />
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M21.719 20.651a1.44 1.44 0 0 1-.094.492 2.4 2.4 0 0 1-.258.5 3.563 3.563 0 0 1-.378.475 3.067 3.067 0 0 1-.455.4 2.22 2.22 0 0 1-.5.274 1.316 1.316 0 0 1-.488.1 1.462 1.462 0 0 1-.421-.061 12.739 12.739 0 0 1-2.389-.989 12.383 12.383 0 0 1-2.073-1.408 11.553 11.553 0 0 1-1.706-1.776 11.3 11.3 0 0 1-2.094-4.452 11.628 11.628 0 0 1-.281-2.578q0-.349.017-.619a1.734 1.734 0 0 1 .1-.5 1.256 1.256 0 0 1 .261-.415 2.5 2.5 0 0 1 .5-.391c.1-.059.219-.118.348-.181a4.079 4.079 0 0 1 .4-.168 3.733 3.733 0 0 1 .41-.12 1.716 1.716 0 0 1 .385-.047 1.6 1.6 0 0 1 .671.131 1.683 1.683 0 0 1 .5.345 2.28 2.28 0 0 1 .374.5q.16.289.313.6a6.6 6.6 0 0 1 .341.873 3.1 3.1 0 0 1 .141.927 2.1 2.1 0 0 1-.1.669 2.235 2.235 0 0 1-.243.512 2.4 2.4 0 0 1-.319.395l-.319.317a2.311 2.311 0 0 0-.243.284.489.489 0 0 0-.1.284.9.9 0 0 0 .131.3q.13.231.334.546c.137.209.286.433.448.668s.321.46.476.67.291.394.411.552a3.6 3.6 0 0 0 .254.311 1.332 1.332 0 0 0 .214.178.514.514 0 0 0 .274.063.987.987 0 0 0 .385-.087l.425-.187c.147-.067.3-.129.465-.187a1.5 1.5 0 0 1 .5-.087 2.277 2.277 0 0 1 .68.1 3.435 3.435 0 0 1 .625.264 3.815 3.815 0 0 1 .572.382q.271.217.519.451.18.174.354.358a3.164 3.164 0 0 1 .314.391 2 2 0 0 1 .224.438 1.457 1.457 0 0 1 .095.503zm-.856 0a.735.735 0 0 0-.073-.32 1.4 1.4 0 0 0-.185-.288 2.553 2.553 0 0 0-.24-.254c-.087-.08-.169-.156-.244-.228q-.187-.174-.389-.338a3.425 3.425 0 0 0-.421-.294 2.344 2.344 0 0 0-.462-.211 1.589 1.589 0 0 0-.508-.08 1.271 1.271 0 0 0-.459.083q-.217.083-.432.185t-.428.184a1.239 1.239 0 0 1-.455.084 1.452 1.452 0 0 1-.665-.161 1.4 1.4 0 0 1-.519-.441l-1.947-2.716a1.25 1.25 0 0 1-.2-.388 1.443 1.443 0 0 1-.067-.436 1.206 1.206 0 0 1 .1-.5 1.7 1.7 0 0 1 .244-.392 3.54 3.54 0 0 1 .317-.335 3.425 3.425 0 0 0 .318-.334 1.746 1.746 0 0 0 .244-.395 1.273 1.273 0 0 0 .1-.519 2.451 2.451 0 0 0-.047-.435 4.276 4.276 0 0 0-.137-.532 4.674 4.674 0 0 0-.221-.552 2.926 2.926 0 0 0-.293-.492 1.626 1.626 0 0 0-.36-.354.724.724 0 0 0-.418-.137 1.092 1.092 0 0 0-.271.047 4.106 4.106 0 0 0-.347.113 3.538 3.538 0 0 0-.337.147 1.653 1.653 0 0 0-.24.141 1.226 1.226 0 0 0-.207.188.612.612 0 0 0-.11.188.837.837 0 0 0-.047.217c-.006.078-.01.171-.01.277a11.707 11.707 0 0 0 .548 3.656 10.136 10.136 0 0 0 1.575 3.021 10.643 10.643 0 0 0 2.493 2.345 13.564 13.564 0 0 0 3.306 1.622.593.593 0 0 0 .187.026.74.74 0 0 0 .395-.153 2.539 2.539 0 0 0 .432-.372 2.6 2.6 0 0 0 .344-.454.843.843 0 0 0 .135-.413z"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
