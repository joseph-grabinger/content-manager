
export const convertDate = (published) => {
    const months = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    };
    if (published == undefined) {
        return 'empty';
    }
    const date = published.substring(0, 10);
    const [year, month, day] = date.split('-');
    return `${day}-${months[parseInt(month)]}-${year}`;
};

export const convertTitleToUrl = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
}

export const convertUrlToTitle = (url) => {
    return url.replace(/-/g, ' ');
}

export const convertNameToInitials = (name) => {
    const [firstName, lastName] = name.split(' ');
    return `${firstName[0]}${lastName[0]}`;
}
