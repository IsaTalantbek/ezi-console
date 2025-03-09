import { blue, green, red, yellow } from 'colorette';

export interface Inotice {
    comment: string;
    path?: string;
    name?: string;
    silent?: boolean;
    space?: boolean;
}

export interface Iwarn {
    warn: string;
    comment?: string;
    path?: string;
    name?: string;
    silent?: boolean;
    space?: boolean;
}

export interface Ierror {
    error: any;
    comment?: string;
    path?: string;
    name?: string;
    exit?: boolean;
    space?: boolean;
}

export interface Icustom {
    type: string | null;
    comment?: string;
    commentKey?: string | null;
    path?: string;
    name?: string;
    silent?: boolean;
    space?: boolean;
}

export interface Ione {
    key: string | null;
    value: string;
}

export interface EziConsole {
    error: Function;
    notice: Function;
    warn: Function;
    custom: Function;
    one: Function;
}

/**
 * Displays an error message with optional details and terminates the process.
 *
 * @param options - The error message options
 * @param options.error - Required. The main error message or object
 * @param options.comment - Optional. Additional comment about the error
 * @param options.name - Optional. The name associated with the error
 * @param options.path - Optional. The file path where the error occurred
 * @param options.exit - Optional. If true, process.exit(1)
 * @param optioms.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function error({
    path,
    name,
    comment,
    error,
    exit,
    space = true
}: Ierror): void {
    space ? console.log('') : null;
    console.error(`> type: ${red('error')}`);
    console.error(`> error: ${red(error)}`);
    comment ? console.error(`> comment: ${comment}`) : null;
    name ? console.error(`> name: ${name}`) : null;
    path ? console.error(`> path: ${path}`) : null;
    space ? console.log('') : null;
    exit ? process.exit(1) : null;
}

/**
 * Displays a notice message with optional details.
 *
 * @param options - The notice message options
 * @param options.comment - Required. The main content of the notice message
 * @param options.path - Optional. The file path associated with the notice
 * @param options.name - Optional. The name associated with the notice
 * @param options.silent - Optional. if true, nothing is output to the console
 * @param optioms.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function notice({
    path,
    name,
    comment,
    silent,
    space = true
}: Inotice): void {
    if (!silent) {
        space ? console.log('') : null;
        console.log(`> type: ${blue('notice')}`);
        comment ? console.log(`notice: ${comment}`) : null;
        name ? console.log(`> name: ${name}`) : null;
        path ? console.log(`> path: ${path}`) : null;
        space ? console.log('') : null;
    }
    return;
}
/**
 * Displays a warning message with optional details.
 *
 * @param options - The warning message options
 * @param options.warn - Required. Warn message
 * @param options.comment - Optional. The main content of the warning message
 * @param options.path - Optional. The file path associated with the warning
 * @param options.name - Optional. The name associated with the warning
 * @param options.silent - Optional. if true, nothing is output to the console
 * @param optioms.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function warn({
    path,
    name,
    warn,
    silent,
    comment,
    space = true
}: Iwarn): void {
    if (!silent) {
        space ? console.log('') : null;
        console.log(`> type: ${yellow('warn')}`);
        warn ? console.log(`> warn: ${warn}`) : null;
        comment ? console.error(`> comment: ${comment}`) : null;
        name ? console.log(`> name: ${name}`) : null;
        path ? console.log(`> path: ${path}`) : null;
        space ? console.log('') : null;
    }
}
/**
 * Displays a custom message with optional details.
 *
 * @param options - The custom message options
 * @param options.type - Required, The type of the custom message
 * @param options.comment - Optional. The main content of the custom message
 * @param options.commentKey - Optional. Key for the comment value. By default 'comment', if null, there will be no key
 * @param options.path - Optional. The file path associated with the message
 * @param options.name - Optional. The name associated with the message
 * @param options.silent - Optional. if true, nothing is output to the console
 * @param options.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function custom({
    type,
    path,
    name,
    comment,
    commentKey = 'comment',
    silent,
    space = true
}: Icustom): void {
    if (!silent) {
        space ? console.log('') : null;
        type ? console.log(`> type: ${green(type)}`) : null;
        comment
            ? console.error(
                  `> ${commentKey === null ? '' : `${commentKey}: `}${comment}`
              )
            : null;
        name ? console.log(`> name: ${name}`) : null;
        path ? console.log(`> path: ${path}`) : null;
        space ? console.log('') : null;
    }
}
/**
 * Displays a one message with optional details.
 *
 * @param options - The one message options (> "im good": "true")
 * @param options.key - The key of message (> "key": "value")
 * @param options.value - The value of message (> "key": "value")
 * @returns void
 */
export function one({ key, value }: Ione): void {
    console.error(`> ${key === null ? '' : `${key}: `}${value}`);
}

export const ezcl: EziConsole = {
    error,
    notice,
    warn,
    custom,
    one
};
