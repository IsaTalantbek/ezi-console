import { blue, green, red, yellow } from 'colorette';

interface Imessage {
    path?: string;
    name?: string;
    comment?: string;
    silent?: boolean;
}

interface Ierror {
    error: any;
    path?: string;
    name?: string;
    comment?: string;
    exit?: boolean;
}

interface Icustom {
    type: string;
    path?: string;
    name?: string;
    comment?: string;
    silent?: boolean;
}

interface Ione {
    key: string;
    value: string;
}

const cl = {
    /**
     * Displays an error message with optional details and terminates the process.
     *
     * @param options - The error message options
     * @param options.path - Optional. The file path where the error occurred
     * @param options.name - Optional. The name associated with the error
     * @param options.comment - Optional. Additional comment about the error
     * @param options.error - The main error message or object
     * @param options.exit - Optional. If false, prevents the process from exiting
     * @returns void
     */
    error({ path, name, comment, error, exit }: Ierror): void {
        console.log('');
        console.error(`> type: ${red('error')}`);
        console.error(`> error: ${red(error)}`);
        comment ? console.error(`> comment: ${comment}`) : null;
        name ? console.error(`> name: ${name}`) : null;
        path ? console.error(`> path: ${path}`) : null;
        console.log('');
        exit ? process.exit(1) : null;
    },

    /**
     * Displays a notice message with optional details.
     *
     * @param options - The notice message options
     * @param options.path - Optional. The file path associated with the notice
     * @param options.name - Optional. The name associated with the notice
     * @param options.comment - Optional. The main content of the notice message
     * @param options.silent - Optional. if true, nothing is output to the console
     * @returns void
     */
    notice({ path, name, comment, silent }: Imessage): void {
        if (!silent) {
            console.log('');
            console.log(`> type: ${blue('notice')}`);
            comment ? console.log(`> notice: ${comment}`) : null;
            name ? console.log(`> name: ${name}`) : null;
            path ? console.log(`> path: ${path}`) : null;
            console.log('');
        }
        return;
    },
    /**
     * Displays a warning message with optional details.
     *
     * @param options - The warning message options
     * @param options.path - Optional. The file path associated with the warning
     * @param options.name - Optional. The name associated with the warning
     * @param options.comment - Optional. The main content of the warning message
     * @param options.silent - Optional. if true, nothing is output to the console
     * @returns void
     */
    warn({ path, name, comment, silent }: Imessage): void {
        if (!silent) {
            console.log('');
            console.log(`> type: ${yellow('warn')}`);
            comment ? console.log(`> warn: ${comment}`) : null;
            name ? console.log(`> name: ${name}`) : null;
            path ? console.log(`> path: ${path}`) : null;
            console.log('');
        }
    },
    /**
     * Displays a custom message with optional details.
     *
     * @param options - The custom message options
     * @param options.type - The type of the custom message
     * @param options.path - Optional. The file path associated with the message
     * @param options.name - Optional. The name associated with the message
     * @param options.comment - Optional. The main content of the custom message
     * @param options.silent - Optional. if true, nothing is output to the console
     * @returns void
     */
    custom({ type, path, name, comment, silent }: Icustom): void {
        if (!silent) {
            console.log('');
            console.log(`> type: ${green(type)}`);
            comment ? console.log(`> ${type}: ${comment}`) : null;
            name ? console.log(`> name: ${name}`) : null;
            path ? console.log(`> path: ${path}`) : null;
            console.log('');
        }
    },
    /**
     * Displays a one message with optional details.
     *
     * @param options - The one message options (> "im good": "true")
     * @param options.key - The key of message (> "key": "value")
     * @param options.value - The value of message (> "key": "value")
     * @returns void
     */
    one({ key, value }: Ione): void {
        console.log(`> ${key}: ${value}`);
    }
};

export default cl;
