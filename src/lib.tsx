export const clock = () => {
    const date = new Date()
    return {
        timestamp: Date.now(),

        // Horário
        time: {
            h: String(date.getHours()).padStart(2, '0'),
            m: String(date.getMinutes()).padStart(2, '0'),
            s: String(date.getSeconds()).padStart(2, '0'),
            ms: String(date.getMilliseconds()).padStart(3, '0'),
        },

        // Data
        day: String(date.getDate()).padStart(2, '0'),
        month: String(date.getMonth() + 1).padStart(2, '0'), // Janeiro = 0
        year: date.getFullYear(),

        // Informações adicionais
        weekDay: date.getDay(), // 0 = Domingo, 6 = Sábado
        iso: date.toISOString(),

        formatted: {
            time: `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`,
            date: `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
        }
    };
};