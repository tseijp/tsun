from rest_framework.pagination import CursorPagination


class TsunPagination(CursorPagination):
    page_size = 5
    ordering = '-id'
    max_page_size = 5
    offset_cutoff = 100
    cursor_query_param = 'cursor'
