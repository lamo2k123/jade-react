function () {
  return React.DOM.select({
      "value": "B"
    },
    React.DOM.option({
        "value": "A"
      },
      "Apple"
    ),
    React.DOM.option({
        "value": "B"
      },
      "Banana"
    ),
    React.DOM.option({
        "value": "C"
      },
      "Cranberry"
    )
  );
}
