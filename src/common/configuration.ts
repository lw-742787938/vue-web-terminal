/*
 * @Author: 罗文 742787938@qq.com
 * @Date: 2024-08-26 09:18:10
 * @LastEditors: 罗文 742787938@qq.com
 * @LastEditTime: 2024-08-26 16:50:20
 * @FilePath: \vue-web-terminal\src\common\configuration.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {Command} from "~/types";

export const DEFAULT_COMMANDS:Command[] = [
    {
        key: 'help',
        title: 'Help',
        group: 'local',
        usage: 'help [pattern]',
        description: 'Show command document.',
        example: [
            {
                des: "Get all commands.",
                cmd: 'help'
            }, {
                des: "Get help documentation for exact match commands.",
                cmd: 'help refresh'
            }, {
                des: "Get help documentation for fuzzy matching commands.",
                cmd: 'help *e*'
            }, {
                des: "Get help documentation for specified group, match key must start with ':'.",
                cmd: 'help :groupA'
            }
        ]
    }, {
        key: 'clear',
        title: 'Clear screen or history logs',
        group: 'local',
        usage: 'clear [history]',
        description: 'Clear screen or history.',
        example: [
            {
                cmd: 'clear',
                des: 'Clear all records on the current screen.'
            }, {
                cmd: 'clear history',
                des: 'Clear command history'
            }
        ]
    }
]

export const WINDOW_STYLE = {
    PADDING_LEFT: 10,
    PADDING_LEFT_FOLD: 20,
    PADDING_RIGHT: 10,
    PADDING_TOP: 0,
    PADDING_BOTTOM: 0
}