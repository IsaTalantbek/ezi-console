import { blue, green, red, yellow } from 'colorette';

export interface INotice {
    notice?: string;
    path?: string;
    name?: string;
    silent?: boolean;
    space?: boolean;
}

export interface IWarn {
    warn: string;
    comment?: string;
    path?: string;
    name?: string;
    silent?: boolean;
    space?: boolean;
}

export interface IError {
    error: Error | string;
    comment?: string;
    path?: string;
    name?: string;
    exit?: boolean;
    space?: boolean;
}

export interface ICustom {
    type: string | null;
    silent?: boolean;
    exit?: boolean;
    space?: boolean;
    [key: string]: string | boolean | null | undefined;
}

export interface IOne {
    [key: string]: string;
}

export interface IEziConsole {
    error: (args: IError) => void;
    notice: (args: INotice) => void;
    warn: (args: IWarn) => void;
    custom: (args: ICustom) => void;
    one: (args: IOne) => void;
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
 * @param options.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function error({
    path,
    name,
    comment,
    error,
    exit,
    space = true
}: IError): void | never {
    space ? console.log('') : null;
    console.error(`> ${red('[error]')}`);

    if (error instanceof Error) {
        console.error(`> error: ${red(error.message)}`);
        if (error.stack) console.error(`> error stack: ${error.stack}`);
    } else {
        console.error(`> error: ${red(error)}`);
    }

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
 * @param options.notice - Required. Main content of notice message
 * @param options.path - Optional. The file path associated with the notice
 * @param options.name - Optional. The name associated with the notice
 * @param options.silent - Optional. if true, nothing is output to the console
 * @param options.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function notice({
    path,
    name,
    notice,
    silent,
    space = true
}: INotice): void {
    if (!silent) {
        space ? console.log('') : null;
        console.log(`> ${blue('[notice]')}`);
        console.log(`> notice: ${notice}`);
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
 * @param options.warn - Required. The main content of the warning message
 * @param options.comment - Optional. Comment with advice or recommendations
 * @param options.path - Optional. The file path associated with the warning
 * @param options.name - Optional. The name associated with the warning
 * @param options.silent - Optional. if true, nothing is output to the console
 * @param options.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function warn({
    path,
    name,
    warn,
    silent,
    comment,
    space = true
}: IWarn): void {
    if (!silent) {
        space ? console.log('') : null;
        console.log(`> ${yellow('[warn]')}`);
        warn ? console.warn(`> warn: ${warn}`) : null;
        comment ? console.log(`> comment: ${comment}`) : null;
        name ? console.log(`> name: ${name}`) : null;
        path ? console.log(`> path: ${path}`) : null;
        space ? console.log('') : null;
    }
    return;
}

const customServiceProperties: string[] = ['silent', 'space', 'type', 'exit'];

/**
 * Displays a custom message with optional details.
 *
 * @param options - The custom message options
 * @param data.type - Optional. The type of the custom message
 * @param data.silent - Optional. if true, nothing is output to the console
 * @param data.exit - Optional. If true, process.exit(1)
 * @param data.space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @param space - Optional. Default true. If true, adds an empty line at the beginning and end
 * @returns void
 */
export function custom(data: ICustom, space: boolean = true): void | never {
    if (!data.silent) {
        space ? (data.space === false ? null : console.log('')) : null;
        data.type ? console.log(`> ${green('[' + data.type + ']')}`) : null;

        for (const key in data) {
            if (typeof key === 'string') {
                if (!customServiceProperties.includes(key)) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) {
                        console.log(`> ${key}: ${data[key]}`);
                    }
                }
            }
        }

        space ? (data.space === false ? null : console.log('')) : null;
        data.exit ? process.exit(1) : null;
    }
    return;
}
/**
 * Displays a one message with optional details.
 *
 * @param options - The one message: one({ message: "Hello World" }); > message: Hello World
 *
 * @returns void
 */
export function one(data: IOne): void {
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            console.log(`> ${key}: ${data[key]}`);
        }
    }
}

export const ezcl: IEziConsole = {
    error,
    notice,
    warn,
    custom,
    one
};
