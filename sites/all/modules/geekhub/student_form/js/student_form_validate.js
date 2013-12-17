//client-side validation script
(function ($) {
    $(document).ready(function () {
        // document-id
        $('#edit-document-id').focus(
            function () {
                $( "#req-item-document-id" ).detach();
            }
        );
        $('#edit-document-id').blur(
            function () {
                var document_id = $('#edit-document-id').val();
                if (document_id == "") {
                    $( ".form-item-document-id" ).append('<div id="req-item-document-id">Required field!</div>');
                }
            }
        );

        // pib
        $('#edit-pib').focus(
            function () {
                $( "#req-item-pib" ).detach();
            }
        );
        $('#edit-pib').blur(
            function () {
                var pib = $('#edit-pib').val();
                if (pib == "") {
                    $( ".form-item-pib" ).append('<div id="req-item-pib">Required field!</div>');
                }
            }
        );

        // birthday-year
        $('#edit-birthday-year').focus(
            function () {
                $( "#req-birthday-year" ).detach();
            }
        );
        $('#edit-birthday-year').blur(
            function () {
                var birthday = $('#edit-birthday-year').val();
                if (birthday <= 1900 || birthday > 2155) {
                    $( ".form-item-birthday-year" ).append('<div id="req-birthday-year">Birthday year must be number in the RANGE 1901 to 2155!</div>');
                }
            }
        );
    });
})(jQuery);



