import type {LayoutServerLoad} from './$types';
import {delay, wouldError} from "../../util";

export const load: LayoutServerLoad = async (event) => {
    await delay(50);
    console.log('would error layout event.setHeaders: ' + wouldError(event.setHeaders));
    console.log('would error layout event.cookies.set: ' + wouldError(event.cookies.set));
};