function openCharTable {
    var s = "’…@áÁàÀâÂäÄåÅæÆçÇéÉèÈêÊëË€əğĞİîÎïÏıñÑňŇôÔöÖœŒøØßşŞúÚùÙûÛüÜýÝỳỲÿŸžŽ",
        character = "",
        charcode = 0;
    for (var i = 0; i < s.length; i++) {
        character = s.charAt(i);
        charcode = s.charCodeAt(i);
        table = document.getElementById("charTable");
    }
}    
