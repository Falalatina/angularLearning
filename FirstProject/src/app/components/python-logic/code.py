
"""Python implementation of the TextRank algorithm.
From this paper:
    https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf

Based on:
    https://gist.github.com/voidfiles/1646117
    https://github.com/davidadamojr/TextRank
"""
import nltk
import itertools
from operator import itemgetter

from pygraph.classes.digraph import digraph
from pygraph.algorithms.pagerank import pagerank
from pygraph.classes.exceptions import AdditionError

text = """In the Valley, we have lots of euphemisms... (continue as before)"""

text = nltk.word_tokenize(text)
tagged = nltk.pos_tag(text)

def filter_for_tags(tagged, tags=['NN', 'JJ', 'NNP']):
    return [item for item in tagged if item[1] in tags]

def normalize(tagged):
    return [(item[0].replace('.', ''), item[1]) for item in tagged]

def unique_everseen(iterable, key=None):
    seen = set()
    seen_add = seen.add
    if key is None:
        for element in itertools.filterfalse(seen.__contains__, iterable):
            seen_add(element)
            yield element
    else:
        for element in iterable:
            k = key(element)
            if k not in seen:
                seen_add(k)
                yield element

tagged = filter_for_tags(tagged)
tagged = normalize(tagged)

unique_word_set = list(unique_everseen([x[0] for x in tagged]))

gr = digraph()
gr.add_nodes(unique_word_set)

window_start = 0
window_end = 2

while True:
    window_words = tagged[window_start:window_end]
    if len(window_words) == 2:
        print(window_words)
        try:
            gr.add_edge((window_words[0][0], window_words[1][0]))
        except AdditionError as e:
            print('already added %s, %s' % (window_words[0][0], window_words[1][0]))
    else:
        break

    window_start += 1
    window_end += 1

calculated_page_rank = pagerank(gr)
di = sorted(calculated_page_rank.items(), key=itemgetter(1))
for k, g in itertools.groupby(di, key=itemgetter(1)):
    print(k, list(map(itemgetter(0), g)))
