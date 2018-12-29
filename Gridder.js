(function ($) {

    $.fn.gridder = function (options) {
        return this.each(function () {

            var elem = $(this);

            var settings = $.extend({
                headerText: new Array(),
                propertyName: new Array(),
                path: new String,
                key: new String,
                value: new String,
                tableTemplate: new String
            }, options);

            keyValue = settings.key;
            valueValue = settings.value;

            var dataObject = new Object();

            dataObject.key = settings.key;
            dataObject.value = settings.value;

            var json = JSON.stringify(dataObject);

            $.post(settings.path, {
                data: json
            }, function (data) {
                if (data.status == 'ko') {
                    console.log("KO");
                }
                else {
                    var elements = JSON.parse(data);

                    if (elements.length > 0) {
                        $(elem).append('<table class="table' + tableTemplate + '"></table>');
                        $(elem).children('table').append('<thead>');
                        $(elem).children('table').children('thead').append('<tr>');

                        for (var i = 0; i < settings.headerText.length; i++) {
                            $(elem).children('table').children('thead').children('tr').append('<th scope="col">' + settings.headerText[i] + '</th>');
                        }

                        $(elem).children('table').children('thead').append('</tr>');
                        $(elem).children('table').children('thead').append('</thead>');

                        $(elem).children('table').append('<tbody>');

                        for (j in elements)
                        {
                            var element = elements[j];

                            $(elem).children('table').children('tbody').append('<tr>');

                            var z = 0;

                            for (k in element)
                            {
                                if (z < settings.propertyName.length) {
                                    $(elem).children('table').children('tbody').children('tr:last-child').append('<td>' + element[settings.propertyName[z]] + '</td>');
                                    z++;
                                }
                            }

                            $(elem).children('table').children('tbody').append('</tr>');

                        }

                        $(elem).children('table').append('</tbody>');
                        $(elem).append('</table>');
                    }
                    else {
                        $(elem).append('<p>Empty list</p>');
                    }
                }
            });
        });
    };

}(jQuery));