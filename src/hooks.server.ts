import type {Handle} from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    console.log('starting ' + event.route.id);
    const result = await resolve(event);
    console.log('resolved ' +  event.route.id);
    return result;
}