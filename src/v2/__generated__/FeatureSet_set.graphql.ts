/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FeatureSet_set = {
    readonly id: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly itemType: string | null;
    readonly orderedItems: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly __typename: string;
                readonly id?: string;
                readonly " $fragmentRefs": FragmentRefs<"GridItem_artwork" | "FeatureFeaturedLink_featuredLink">;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "FeatureSet_set";
};
export type FeatureSet_set$data = FeatureSet_set;
export type FeatureSet_set$key = {
    readonly " $data"?: FeatureSet_set$data;
    readonly " $fragmentRefs": FragmentRefs<"FeatureSet_set">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeatureSet_set",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "HTML"
        }
      ],
      "kind": "ScalarField",
      "name": "description",
      "storageKey": "description(format:\"HTML\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "itemType",
      "storageKey": null
    },
    {
      "alias": "orderedItems",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 35
        }
      ],
      "concreteType": "OrderedSetItemConnection",
      "kind": "LinkedField",
      "name": "orderedItemsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderedSetItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "FeaturedLink"
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "Artwork"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "GridItem_artwork"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FeatureFeaturedLink_featuredLink"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "orderedItemsConnection(first:35)"
    }
  ],
  "type": "OrderedSet"
};
})();
(node as any).hash = 'ab3d81270da7110cd400fd1e454f2248';
export default node;
