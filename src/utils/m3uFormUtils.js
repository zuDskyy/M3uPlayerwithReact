import { listRequest } from "./requestMethodUtils";

export const m3uParserByRegEx = async (currentPlaylist) => {
  try {
    const listdata = await listRequest(currentPlaylist);
    console.log(listdata);

    const data = listdata
      .flatMap((item, index) => {
        const { title } = item;

        // Extracting properties using string manipulation
        if (title.startsWith("-1 tvg-rec=")) {
          const startIndex = title.indexOf('"', 11); // Find the start index of the group title
          const endIndex = title.indexOf('"', startIndex + 1); // Find the end index of the group title
          const groupTitleRegex = /group-title="([^"]*)"/;
          const groupTitleMatch = groupTitleRegex.exec(title);
          const groupTitle = groupTitleMatch ? groupTitleMatch[1] : "";

          const commaIndex = title.indexOf(
            ",",
            groupTitleMatch
              ? groupTitleMatch.index + groupTitleMatch[0].length
              : 0
          );
          const tvName =
            commaIndex !== -1 ? title.substring(commaIndex + 1).trim() : "";

          return {
            title: item,
            id: index + 1,
            group: { groupname: groupTitle },
            tvname: tvName,
          };
        } else if (title.startsWith("-1,")) {
          const tvName = title.substring(3);

          return {
            title: item,
            id: index + 1,
            group: { groupname: "" },
            tvname: tvName,
          };
        } else if (
          title.includes('tvg-name="') &&
          title.includes('group-title="')
        ) {
          const startIndex1 = title.indexOf('tvg-name="') + 10;
          const endIndex1 = title.indexOf('"', startIndex1);
          const startIndex2 = title.indexOf('group-title="', endIndex1) + 13;
          const endIndex2 = title.indexOf('"', startIndex2);

          const tvName = title.substring(startIndex1, endIndex1);
          const groupTitle = title.substring(startIndex2, endIndex2);

          // Extracting the TV logo using additional string manipulation
          const tvLogoStartIndex = title.indexOf('tvg-logo="', endIndex2);
          const tvLogoEndIndex = title.indexOf('"', tvLogoStartIndex + 10);
          const tvLogo = title.substring(tvLogoStartIndex + 10, tvLogoEndIndex);

          const tvLogoRegex = /tvg-logo="([^"]+)"/;
const tvLogoMatch = title.match(tvLogoRegex);
const tvLogo2 = tvLogoMatch ? tvLogoMatch[1] : '';
          return {
            title: item,
            id: index + 1,
            tvlogo: tvLogo,
            tvlogo2:tvLogo2,
            group: { groupname: groupTitle },
            tvname: tvName,
          };
        }

        return null;
      })
      .filter((item) => item !== null);

    console.log(data);
    return data;
  } catch (err) {
    console.clear(err);
  }
};
