## About ##

jQuery Table Filter is a *very* simple table filter plugin. The plugin includes almost no configuration options. Instead,it assumes you are going to build your table and filters a certian way.

## How to Use ##

The filter plugin assumes you are buliding your tables using standard (X)HTML with a `thead` and `tbody`. It also assumes that the table data you want to filter on has specific CSS classes assigned to them.

For example, if you want to filter on a person name, then all the table cells that has the name would have a CSS class of something like `name`. This allows the plugin to easily grab all text within that cell when performing the filter.

The plugin accepts one main object, `filters`. This object contains one-to-many properties inside it. Example:

````
filters: {
	id: $('#id'),
	name: $('#name'),
	table_cell_css_class: $('#html_text_input_id')
}
````

Earlier it was stated that the CSS classes given to table cells was important. Assuming that you gave your table cells that have peoples names `name`, then the index for the name property would be `name` - just as in the example above demonstrates.

The value of the property is a jQuery selector for the (X)HTML input element you are using for the filter.